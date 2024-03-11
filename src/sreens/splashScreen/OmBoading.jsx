import { View, Text, FlatList, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { COLORS, SIZES, constants, FONTS } from '../../constants'
import Svg, {Path}  from 'react-native-svg'
import { TextButton } from '../../components'


export default function OmBoading() {
  const [isLastItem, setInsLastItem] = useState(false)
  // SVG COURBE
  const controlX = SIZES.width / 2

  // Flatlist
  const currentIndex = useRef(0)
  const screenFlatistRef = useRef()
  const titleFlatList = useRef()
  const handleNextPress = () => {
    if(currentIndex.current < constants.onboarding_screens.length - 1) {
      currentIndex.current += 1
      const nextIndex = currentIndex.current
      const offset = nextIndex * SIZES.width
      screenFlatistRef?.current?.scrollToOffset({
        offset,
        animated: true
      })
      titleFlatList?.current?.scrollToOffset({
        offset,
        animated: true
      })
      if(currentIndex.current === constants.onboarding_screens.length - 1) {
        setInsLastItem(true)
      }
    }
  }
   
  return (
    <View style={{flex: 1}}>

      {/* Screenshot list */}
      <View style={{flex: 2, backgroundColor: COLORS.primary50}}>
          <FlatList 
          ref={screenFlatistRef}
            horizontal
            pagingEnabled
            scrollEnabled={false}
            snapToAlignment='center'
            snapToInterval={SIZES.width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            data={constants.onboarding_screens}
            keyExtractor={item => `omboading_screen_phone-${item.id}`}
            renderItem={({item, index}) => {
              return(
                <View style={{
                  width: SIZES.width,
                  alignItems: 'center'
                  }}>
                    <Image 
                      source={item.image}
                      resizeMode='contain'
                      style={{
                        marginTop: SIZES.padding * 3,
                        width: SIZES.width * 0.8,
                        height: SIZES.height * 0.8
                      }}
                    />
                </View>
              )
            }}
          />
      </View>

      {/* title and description list */}
      <View style={{
        flex: 1, 
        backgroundColor: COLORS.gray900
        }}>
          {/* Curve */}
          <Svg 
            style={{
              position: 'absolute',
              top: -90
            }}
            width={SIZES.width}
            height={100}
            >
              <Path 
                d={`M 0 20 Q ${controlX} 130 ${SIZES.width}
                 20 L ${SIZES.width} 100 L 0 100 Z`} 
                fill={COLORS.gray900} 
              />
          </Svg>
          {/* title and description */}
          <FlatList 
          ref={titleFlatList}
            horizontal
            pagingEnabled
            scrollEnabled={false}
            snapToAlignment='center'
            snapToInterval={SIZES.width}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            data={constants.onboarding_screens}
            keyExtractor={item => `omboading_screen_title-${item.id}`}
            renderItem={({item, index}) => {
              return(
                <View
                  style={{
                    paddingHorizontal: SIZES.radius,
                    width: SIZES.width,
                    alignItems: "center"
                  }}
                >
                  {/* title */}
                  <Text 
                    style={{
                      ...FONTS.h1,
                      textAlign: "center",
                      color: COLORS.primary50
                      }}>
                      {item.title}
                  </Text>
                    {/* Description */}
                    <Text 
                    style={{
                      ...FONTS.pr2,
                      marginTop: SIZES.radius,
                      textAlign: "center",
                      color: COLORS.primary50
                      }}>
                      {item.desc}
                  </Text>
                </View>
              )
            }}
          />
          
          {/* Boutton next page */}
          <TextButton
           label={isLastItem ? "Get Started" : "Next"}
           contentContainerStyle={{
            marginHorizontal: SIZES.padding,
            marginBottom: SIZES.padding
           }}
           onPress={handleNextPress}
          />
      </View>
    </View>
  )
}