import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  svg: {
    backgroundColor: '#fff',
    shadowColor: 'transparent',
    elevation: 0,
  },
});

const svgStyles = {
  st1: {
    fill: 'none',
    stroke: '#000000',
    strokeWidth: 1,
    strokeLinecap: 'square',
    strokeLinejoin: 'square',
  },
  st2: {
    fill: 'none',
    stroke: '#000000',
    strokeWidth: 1.5,
    strokeLinecap: 'square',
    strokeLinejoin: 'round',
  },
  st3: {
    fill: 'none',
    stroke: '#000000',
    strokeWidth: 1.5,
    strokeLinecap: 'square',
    strokeLinejoin: 'square',
  },
};

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <View style={styles.container}><Text>Map loading error</Text></View>;
    }
    return this.props.children;
  }
}

function MariettaMap() {
  const [isLoading, setIsLoading] = React.useState(true);
  
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const savedScale = useSharedValue(1);
  const lastTranslateX = useSharedValue(0);
  const lastTranslateY = useSharedValue(0);

  const panGesture = React.useMemo(
    () =>
      Gesture.Pan()
        .enabled(true)
        .onBegin(() => {
          lastTranslateX.value = translateX.value;
          lastTranslateY.value = translateY.value;
        })
        .onUpdate((e) => {
          translateX.value = lastTranslateX.value + e.translationX;
          translateY.value = lastTranslateY.value + e.translationY;
        }),
    [translateX, translateY, lastTranslateX, lastTranslateY]
  );

  const pinchGesture = React.useMemo(
    () =>
      Gesture.Pinch()
        .enabled(true)
        .onBegin(() => {
          savedScale.value = scale.value;
        })
        .onUpdate((e) => {
          const newScale = savedScale.value * e.scale;
          scale.value = Math.max(0.5, Math.min(newScale, 4));
        }),
    [scale, savedScale]
  );

  const gesture = React.useMemo(
    () => Gesture.Simultaneous(pinchGesture, panGesture),
    [pinchGesture, panGesture]
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }), []);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <View style={styles.container}><Text>Loading map...</Text></View>;
  }

  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={styles.container}>
        <GestureDetector gesture={gesture}>
          <Animated.View 
            style={styles.container}
            collapsable={false}
            removeClippedSubviews={false}
          >
            <AnimatedSvg
              width={Dimensions.get('window').width * 1.5}
              height={Dimensions.get('window').height * 0.8}
              viewBox="0 0 1920 1080"
              style={[styles.svg, animatedStyle]}
              preserveAspectRatio="xMidYMid meet"
              renderToHardwareTextureAndroid={true}
              shouldRasterizeIOS={true}
              cacheEnabled={true}
            >
              <Path
                  d="M716 338.39L716 496.36 738.31 496.36 738.31 501.55"
                  {...svgStyles.st1}
              />
              <Path
                  d="M738.31 537.61L738.31 591.58"
                  {...svgStyles.st1}
              />
              <Path
                  d="M738.31 624.3L738.31 634.33 734.01 634.33"
                  {...svgStyles.st1}
              />
              <Path
                  d="M717.29 634.33h-7.88v288.36h-187.7v58.03s-23.1 9.67-61.25 9.13-63.94-9.13-63.94-9.13v-59.1H74.13V628.25"
                  {...svgStyles.st1}
              />
              <Path
                  d="M74.13 590.63L74.13 540"
                  {...svgStyles.st1}
              />
              <Path
                  d="M74.72 503.58L74.72 210.51 718.07 210.51 718.07 299.35 831.94 299.35"
                  {...svgStyles.st1}
              />
              <Path
                  d="M709.41 845.14L920.75 845.14 920.75 634.33 892.46 634.33"
                  {...svgStyles.st1}
              />
              <Path
                  d="M855.2 634.33L832.63 634.33 832.63 646.69 815.08 646.69 815.08 632.36 793.59 632.36 776.4 632.36 738.31 632.36"
                  {...svgStyles.st1}
              />
              <Path
                  d="M920.75 817.68L986.92 778.27 1071.22 899.35 1233.13 795.23 1309.31 900.78 1401.01 843.47 1426.09 843.47 1426.09 639.52 1138.8 655.77 1233.13 795.23"
                  {...svgStyles.st1}
              />
              <Path
                  d="M986.92 778.27L986.92 732.6 1128.3 641.02 1138.8 655.77"
                  {...svgStyles.st1}
              />
              <Path  
                  d="M1404.58 640.74L1404.58 631.47" 
                  {...svgStyles.st1}
              />
              <Path
                  d="M1404.58 590.39L1784.41 590.39 1784.41 340.66 1847.1 304.84 1785.49 209.56 1785.49 87.41 1436.95 87.41 1436.95 265.44 1357.43 265.44 1357.43 152.24"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1436.95 150.81L1110.27 150.81 1110.27 239.29"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1110.27 232.24L1113.13 232.24"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1133.79 232.24L1143.58 232.24"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1143.58 190.21L1143.58 318.63"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1143.58 340.48v17.19h295.52v136.12h-287.64c.36 0-.72-136.12-.72-136.12h-42.99v10.03"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1151.49 469.8L1107.76 469.8 1107.76 387.14"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1107.76 357.68L1107.76 270.27"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1143.58 270.27L1324.12 270.27"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1324.12 150.81L1324.12 169.62"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1324.12 190.21L1324.12 320.33"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1324.12 340.48L1324.12 357.68"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1439.1 357.68L1439.1 318.63"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1358.86 357.68L1358.86 297.5 1439.1 297.5 1439.1 301.03"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1212.71 311.11L1212.71 195.05"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1265.01 311.11L1265.01 195.05"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1265.01 176.42L1265.01 150.81"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1212.71 176.42L1212.71 150.81"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1212.71 332.6L1212.71 357.68"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1265.01 332.6L1265.01 357.68"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1080.71 150.81L831.94 150.81 831.94 166.39"
                  {...svgStyles.st1}
              />
              <Path
                  d="M831.94 204.54L831.94 493.8 882.98 493.8"
                  {...svgStyles.st1}
              />
              <Path
                  d="M902.86 493.8L1007.1 493.8"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1025.91 493.8L1076.41 493.8 1076.41 239.29"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1076.41 219.59L1076.41 150.81"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1014.09 150.81L1014.09 219.59"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1076.41 264.72L831.94 264.72"
                  {...svgStyles.st1}
              />
              <Path
                  d="M1014.09 264.72L1014.09 239"
                  {...svgStyles.st1}
              />
              <Path
                  d="M960 264.72L960 150.81"
                  {...svgStyles.st1}
              />
              <Path
                  d="M831.94 238.93L794.03 238.93"
                  {...svgStyles.st1}
              />
              <Path
                  d="M757.01 238.93L718.07 238.93"
                  {...svgStyles.st1}
              />
              <Path
                  d="M716 379.83L781.37 379.83 831.94 379.83"
                  {...svgStyles.st1}
              />
              <Path
                  d="M781.37 379.83L781.37 456.24"
                  {...svgStyles.st1}
              />
              <Path
                  d="M749.13 427.35L811.94 427.35"
                  {...svgStyles.st1}
              />
              <Path
                  d="M742.92 473.44L742.92 463.65 767.04 463.65 767.04 456.24 784.95 456.24 784.95 464.84 805.73 464.84 805.73 473.44"
                  {...svgStyles.st1}
              />
              <Path
                  d="M786.15 493.8L831.94 493.8"
                  {...svgStyles.st1}
              />
              <Path
                  d="M986.92 732.6L920.75 732.6"
                  {...svgStyles.st1}
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(180 1026.885 503.585)"
                  d="M1026.51 493.81H1027.26V513.35H1026.51z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1026.51 513.36c-10.72 0-19.41-8.75-19.41-19.54"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-90 1414.09 634.79)"
                  d="M1413.73 625.28H1414.46V644.3H1413.73z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1423.6 634.42c0-10.43-8.52-18.89-19.02-18.89"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(90 1414.085 596.185)"
                  d="M1413.73 586.67H1414.46V605.6899999999999H1413.73z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1423.6 596.55c0 10.43-8.52 18.89-19.02 18.89"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-90 748.495 627.485)"
                  d="M748.13 617.97H748.86V636.99H748.13z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M758.01 627.12c0-10.43-8.52-18.89-19.02-18.89"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(90 748.495 588.885)"
                  d="M748.13 579.37H748.86V598.39H748.13z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M758.01 589.25c0 10.43-8.52 18.89-19.02 18.89"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-90 748.495 538.625)"
                  d="M748.13 529.11H748.86V548.13H748.13z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M758.01 538.26c0-10.43-8.52-18.89-19.02-18.89"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(90 748.495 500.015)"
                  d="M748.13 490.51H748.86V509.53H748.13z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M758.01 500.38c0 10.43-8.52 18.89-19.02 18.89"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-90 732.615 491.785)"
                  d="M732.28 481.47H732.9499999999999V502.09000000000003H732.28z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M722.3 491.45c0-9.55 9.23-17.3 20.62-17.3"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-90 814.355 490.905)"
                  d="M814.03 482.28H814.6899999999999V499.53H814.03z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M822.98 490.57c0-9.46-7.73-17.14-17.25-17.14"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-90 707.905 338.025)"
                  d="M707.54 328.52H708.27V347.53999999999996H707.54z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M698.4 337.66c0-10.43 8.52-18.89 19.02-18.89"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(90 707.905 299.425)"
                  d="M707.54 289.91H708.27V308.93H707.54z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M698.4 299.79c0 10.43 8.52 18.89 19.02 18.89"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-90 64.615 625.295)"
                  d="M64.25 615.78H64.98V634.8H64.25z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M55.1 624.93c0-10.43 8.52-18.89 19.02-18.89"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(90 64.615 586.695)"
                  d="M64.25 577.18H64.98V596.1999999999999H64.25z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M55.1 587.06c0 10.43 8.52 18.89 19.02 18.89"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-90 67.52 542.53)"
                  d="M67.16 533.02H67.89V552.04H67.16z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M58.01 542.17c0-10.43 8.52-18.89 19.02-18.89"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(90 67.52 503.93)"
                  d="M67.16 494.42H67.89V513.44H67.16z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M58.01 504.29c0 10.43 8.52 18.89 19.02 18.89"
              />
              <Path
                  {...svgStyles.st2}
                  d="M854.48 615.31H855.21V634.3299999999999H854.48z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M855.2 615.31c10.43 0 18.89 8.52 18.89 19.02"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-180 893.44 624.82)"
                  d="M893.08 615.31H893.8100000000001V634.3299999999999H893.08z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M893.08 615.31c-10.43 0-18.89 8.52-18.89 19.02"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-90 822.425 204.545)"
                  d="M822.06 195.03H822.79V214.05H822.06z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M812.91 204.18c0-10.43 8.52-18.89 19.02-18.89"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(90 822.425 165.945)"
                  d="M822.06 156.43H822.79V175.45000000000002H822.06z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M812.91 166.3c0 10.43 8.52 18.89 19.02 18.89"
              />
              <Path
                  {...svgStyles.st2}
                  d="M755.39 219.91H756.12V238.93H755.39z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M756.11 219.91c10.43 0 18.89 8.52 18.89 19.02"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-180 794.355 229.42)"
                  d="M793.99 219.91H794.72V238.93H793.99z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M793.99 219.91c-10.43 0-18.89 8.52-18.89 19.02"
              />
              <Path
                  {...svgStyles.st2}
                  d="M713.85 614.53H714.6V634.0699999999999H713.85z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M714.6 614.53c10.72 0 19.41 8.75 19.41 19.54"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-90 1004.31 239.37)"
                  d="M1003.94 229.6H1004.69V249.14H1003.94z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M994.54 239c0-10.72 8.75-19.41 19.54-19.41"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-90 1066.64 239)"
                  d="M1066.27 229.23H1067.02V248.76999999999998H1066.27z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1056.87 238.62c0-10.72 8.75-19.41 19.54-19.41"
              />
              <Path
                  {...svgStyles.st2}
                  d="M1113.13 212.7H1113.88V232.23999999999998H1113.13z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1113.88 212.7c10.72 0 19.41 8.75 19.41 19.54"
              />
              <Path
                  {...svgStyles.st2}
                  d="M1328.71 212.7H1329.46V232.23999999999998H1328.71z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1329.46 212.7c10.72 0 19.41 8.75 19.41 19.54h8.56"
              />
              <Path
                  {...svgStyles.st2}
                  d="M1329.08 282.35H1329.83V301.89000000000004H1329.08z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1329.83 282.35c10.72 0 19.41 8.75 19.41 19.54h9.62"
              />
              <Path
                  {...svgStyles.st2}
                  d="M1113.5 276.59H1114.25V296.13H1113.5z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1114.25 296.14c10.72 0 19.41-8.75 19.41-19.54h9.92"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(180 902.765 503.585)"
                  d="M902.39 493.81H903.14V513.35H902.39z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M902.39 513.36c-10.72 0-19.41-8.75-19.41-19.54"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-90 1097.985 387.515)"
                  d="M1097.61 377.74H1098.36V397.28000000000003H1097.61z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1088.21 387.14c0-10.72 8.75-19.41 19.54-19.41"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-90 1133.66 338.41)"
                  d="M1133.29 328.64H1134.04V348.18H1133.29z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1123.89 338.04c0-10.72 8.75-19.41 19.54-19.41"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(90 1133.66 170.43)"
                  d="M1133.29 160.66H1134.04V180.2H1133.29z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1123.89 170.8c0 10.72 8.75 19.41 19.54 19.41"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(90 1429.325 301.405)"
                  d="M1428.96 291.63H1429.71V311.17H1428.96z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1419.56 301.78c0 10.72 8.75 19.41 19.54 19.41"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(90 1333.885 170.805)"
                  d="M1333.52 161.03H1334.27V180.57H1333.52z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1343.66 171.18c0 10.72-8.75 19.41-19.54 19.41"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-90 1333.89 340.11)"
                  d="M1333.52 330.34H1334.27V349.88H1333.52z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1343.66 339.74c0-10.72-8.75-19.41-19.54-19.41"
              />
              <Path
                  {...svgStyles.st1}
                  d="M1324.12 232.24L1329.08 232.24"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1324.12 301.9L1329.46 301.9"
              />
              <Path
                  {...svgStyles.st1}
                  d="M1107.76 276.59L1113.88 276.59"
              />
              <Path
                  {...svgStyles.st1}
                  d="M738.31 491.78L738.31 496.36 758.68 496.36"
              />
              <Path
                  {...svgStyles.st1}
                  d="M806.89 491.23L806.89 493.8"
              />
              <Path
                  {...svgStyles.st2}
                  transform="rotate(-180 1100.495 141.04)"
                  d="M1100.12 131.27H1100.87V150.81H1100.12z"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1100.12 131.27c-10.72 0-19.41 8.75-19.41 19.54"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1100.5 150.81L1110.27 150.81"
              />
              <Path
                  {...svgStyles.st3}
                  d="M1143.43 170.8L1143.43 150.81"
              />
              <Path
                  {...svgStyles.st1}
                  d="M1404.58 595.87L1404.58 589.9"
              />

            </AnimatedSvg>
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}

export default MariettaMap;