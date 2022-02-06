import React from 'react'
import styled from 'styled-components'
import { Text, Progress } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import useGetLotteryHasDrawn from 'hooks/useGetLotteryHasDrawn'
import { useCurrentTime } from 'hooks/useTimer'
import {
  getLotteryDrawTime,
  getLotteryDrawTimeMillis,
  getLotteryDrawStep,
  getTicketSaleTime,
  getTicketSaleStep,
} from '../helpers/CountdownHelpers'

const ProgressWrapper = styled.div`
  display: block;
  width: 100%;
`

const TopTextWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const BottomTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const StyledPrimaryText = styled(Text)`
  margin-right: 16px;
`
const LotteryProgress = () => {
  const TranslateString = useI18n()
  const lotteryHasDrawn = useGetLotteryHasDrawn()
  const currentMillis = useCurrentTime()
  const timeUntilTicketSale = getTicketSaleTime(currentMillis)
  const timeUntilLotteryDraw = getLotteryDrawTime(currentMillis)
  const timeMillis = getLotteryDrawTimeMillis(currentMillis)

  return (
    <ProgressWrapper>
      <Progress primaryStep={getLotteryDrawStep(currentMillis)} secondaryStep={getTicketSaleStep()} showProgressBunny />
      {/* <TopTextWrapper>
        <StyledPrimaryText fontSize="20px" bold color="contrast">
          {lotteryHasDrawn ? timeUntilTicketSale : timeUntilLotteryDraw}
        </StyledPrimaryText>
        <Text fontSize="20px" bold color="primary">
          {lotteryHasDrawn ? TranslateString(0, 'Until ticket sale') : TranslateString(0, 'Until lottery draw')}
        </Text>
      </TopTextWrapper>
      {lotteryHasDrawn && ( */}
        <TopTextWrapper>
          { (Number(timeMillis) < 120000 || Number(timeMillis) > 3480000) ? 
            (
              <StyledPrimaryText fontSize="20px" bold color="primary">
                {TranslateString(999, 'Drawing...')}
              </StyledPrimaryText>
            ) :
            (
              <>
                <StyledPrimaryText fontSize="20px" bold color="contrast">
                  {timeUntilLotteryDraw}
                </StyledPrimaryText>
                <Text fontSize="20px" bold color="primary">
                  {TranslateString(0, 'Until lottery draw')}
                </Text>
              </>
            )
          }
        </TopTextWrapper>
      {/* )} */}
    </ProgressWrapper>
  )
}

export default LotteryProgress
