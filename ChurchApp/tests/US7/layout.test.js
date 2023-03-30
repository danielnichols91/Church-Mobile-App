import React from 'react';
import { render } from "@testing-library/react";
import OnlineService from '../../screens/OnlineService';

describe('OnlineService', () => {
  it('should render OnlineService', async () => {
    const {findByText, findByA11yLabel } = render(OnlineService);

    const subTitle1 = await findByText('9am Traditional');
    expect(subTitle1).toBeDefined();

    const subTitle2 = await findByText('11am Modern');
    expect(subTitle2).toBeDefined();

    const youtubePlayer1 = await findByA11yLabel('Youtube Video Player');
    expect(youtubePlayer1).toBeDefined();

    const youtubePlayer2 = await findByA11yLabel('Youtube Video Player');
    expect(youtubePlayer2).toBeDefined();

    const youtubeChannelLink = await findByText('Youtube Channel');
    expect(youtubeChannelLink).toBeDefined();

    // Take a screenshot of the component
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot();
  });
});
