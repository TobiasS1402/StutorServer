import { Card } from '@components/cards/card'
import {
  Divider,
  IconDetail,
  PlainText,
  RoundedImage,
  Title,
} from '@components/general'
import { Container } from '@components/layout/container'
import React from 'react'
import { Pressable, View } from 'react-native'
import { color, spaces, typography } from '@/theme'

interface StutorCardProps {
  name: string
  description: string
  hasDetails?: boolean
  costs?: number
  rating?: number
  duration?: string
  onPress?: () => void
}

const defaultProps: StutorCardProps = {
  name: '',
  description: '',
  hasDetails: false,
  costs: 0,
  rating: 0,
  duration: '',
  onPress: () => null,
}

export const StutorCard = (props: StutorCardProps) => {
  return (
    <Pressable onPress={props.onPress}>
      <Card>
        <Container padding={spaces.xl}>
          <RoundedImage
            source={require('@assets/images/profile.jpeg')}
            width="55px"
            height="55px"
            right={spaces.xl3}
          />
          <View style={{ flex: 1 }}>
            <Title
              value={props.name}
              fontFamily="Lato-Bold"
              fontSize={typography.lg.fontSize}
            />
            <Divider small />
            <PlainText>{props.description}</PlainText>
            {props.hasDetails && (
              <Container style={{ marginTop: spaces.xl2 }}>
                <IconDetail
                  iconName="bitcoin"
                  iconSize={18}
                  iconColor={color.yellow}
                  detailValue={props.costs}
                />
                <IconDetail
                  iconName="star"
                  iconSize={16}
                  iconColor={color.yellow}
                  detailValue={props.rating}
                />
                <IconDetail
                  iconName="clock"
                  iconSize={16}
                  iconColor={color.grayLight}
                  detailValue={props.duration}
                />
              </Container>
            )}
          </View>
        </Container>
      </Card>
    </Pressable>
  )
}

StutorCard.defaultProps = defaultProps
