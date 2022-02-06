export type DataResponse = {
  lotteryNumber: number
  lotteryDate: string
  lotteryNumbers: number[]
  poolSize: number
  burned: number
  contractLink: string
  jackpotTicket: number
  poolJackpot: number

  // TODO: Fill in the error type
  error: any
}

/**
 * Get data for a specific lottery
 */
const getLotteryRoundData = async (lotteryNumber: number): Promise<DataResponse> => {
  try {
    const response = await fetch(`https://api.pancakeswap.com/api/singleLottery?lotteryNumber=${lotteryNumber}`)
    const data = await response.json()

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default getLotteryRoundData
