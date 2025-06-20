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

  const handlePlayClick = () => {
    window.open('https://www.linkedin.com/in/hpatel012', '_blank');
  };

  const handleLinkedinClick = () => { 
    window.open('https://www.linkedin.com/in/hpatel012', '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        {/* Replace 'name' and 'description' with the actual properties of 'bannerData' */}
        <h1>{bannerData.someProperty}</h1> {/* Replace 'someProperty' with the correct property */}
        <p>{bannerData.anotherProperty}</p> {/* Replace 'anotherProperty' with the correct property */}
        <PlayButton onClick={handlePlayClick} />
        <MoreInfoButton onClick={handleLinkedinClick} />
      </div>
    </div>
  );
};

export default ProfileBanner;
