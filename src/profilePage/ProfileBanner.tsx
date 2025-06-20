import React, { useEffect, useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { getProfileBanner } from '../queries/getProfileBanner';
import { ProfileBanner as ProfileBannerType } from '../types';

const ProfileBanner: React.FC = () => {

  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getProfileBanner();
      setBannerData(data);
    }
    fetchData();
  }, []);

  if (!bannerData) return <div>Loading...</div>;

  // Change the handlePlayClick function to open your LinkedIn page
  const handlePlayClick = () => {
    window.open('https://www.linkedin.com/in/hpatel012', '_blank');
  };

  const handleLinkedinClick = () => { 
    window.open('https://www.linkedin.com/in/hpatel012', '_blank');
  }

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="LinkedIn" />
          <MoreInfoButton onClick={handleLinkedinClick} label="More Info" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
