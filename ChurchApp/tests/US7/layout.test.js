// import React from 'react';
// import { render } from "@testing-library/react";
// import OnlineService from '../../screens/OnlineService';

// describe('OnlineService', () => {
//   it('should render OnlineService', async () => {
//     const {findByText, findByA11yLabel } = render(<OnlineService />);

//     const subTitle1 = await findByText('9am Traditional');
//     expect(subTitle1).toBeDefined();

//     const subTitle2 = await findByText('11am Modern');
//     expect(subTitle2).toBeDefined();

//     const youtubePlayer1 = await findByA11yLabel('Youtube Video Player');
//     expect(youtubePlayer1).toBeDefined();

//     const youtubePlayer2 = await findByA11yLabel('Youtube Video Player');
//     expect(youtubePlayer2).toBeDefined();

//     const youtubeChannelLink = await findByText('Youtube Channel');
//     expect(youtubeChannelLink).toBeDefined();

//     // Take a screenshot of the component
//     const screenshot = await page.screenshot();
//     expect(screenshot).toMatchImageSnapshot();
//   });
// });
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import OnlineService from '../../screens/OnlineService';
import { Linking } from 'react-native';

describe('OnlineService', () => {
  test('renders two Youtube videos', async () => {
    await act(async () => {
      const { getByTestId } = render(<OnlineService />);
    
      // wait for getVideos() function to fetch and set video IDs
      await new Promise(resolve => setTimeout(resolve, 500));
    
      const video1 = getByTestId('video1');
      const video2 = getByTestId('video2');
    
      expect(video1.props.videoId).not.toBeNull();
      expect(video2.props.videoId).not.toBeNull();
    })
  });

  test('opens Youtube channel link when link is pressed', () => {
    act(() => {
      const { getByText } = render(<OnlineService />);
      const link = getByText('Youtube Channel');
      fireEvent.press(link);
      expect(Linking.openURL).toHaveBeenCalledWith('https://www.youtube.com/channel/UCHo_NAei6lwlmC9HSFtO-Xw');
    });
  });
});

