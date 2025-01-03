import { View, Text, TouchableOpacity } from 'react-native'

interface ITitleHomeProps {
  title: string
  onPress?: () => void
  isShow?: boolean
}

export default function TitleHome({ title, onPress, isShow = false }: ITitleHomeProps) {
  return (
    <View className="flex-row flex justify-between py-3 items-center">
      <Text className="text-xl font-bold text-[#8873FF]">{title}</Text>
      {isShow && (
        <TouchableOpacity onPress={onPress}>
          <Text className="text-gray-500 text-xs">Xem tất cả</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
