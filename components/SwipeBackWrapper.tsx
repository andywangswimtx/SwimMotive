import React, { useRef } from "react";
import { Animated, PanResponder, View, StyleSheet } from "react-native";

interface Props {
  onSwipeBack: () => void;
  children: React.ReactNode;
}

/**
 * Wraps children and intercepts horizontal left-swipe (finger moves right →)
 * to trigger `onSwipeBack`. This prevents the swipe from propagating to the
 * parent tab navigator so the user goes back to the selection screen first.
 */
export default function SwipeBackWrapper({ onSwipeBack, children }: Props) {
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      // Only capture horizontal drags that start from the left edge area or
      // any horizontal swipe across the screen.
      onMoveShouldSetPanResponder: (_evt, gestureState) => {
        // Activate when horizontal movement is dominant and moving right (swipe-back)
        return (
          gestureState.dx > 10 &&
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy) * 1.5
        );
      },
      onMoveShouldSetPanResponderCapture: (_evt, gestureState) => {
        // Capture so the tab navigator doesn't get this gesture
        return (
          gestureState.dx > 10 &&
          Math.abs(gestureState.dx) > Math.abs(gestureState.dy) * 1.5
        );
      },
      onPanResponderMove: (_evt, gestureState) => {
        // Only allow right movement (positive dx)
        if (gestureState.dx > 0) {
          translateX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_evt, gestureState) => {
        if (gestureState.dx > 80) {
          // Threshold met → animate off screen and call back
          Animated.timing(translateX, {
            toValue: 400,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            onSwipeBack();
          });
        } else {
          // Snap back
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
            tension: 100,
            friction: 10,
          }).start();
        }
      },
      onPanResponderTerminate: () => {
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX }] }]}
      {...panResponder.panHandlers}
    >
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
