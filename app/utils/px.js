
import { Dimensions } from 'react-native'

const deviceW = Dimensions.get('window').width

const basePx = 750

export default px2em = (px) => {
    return px * deviceW / basePx
}
