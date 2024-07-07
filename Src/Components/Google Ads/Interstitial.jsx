import React, { useEffect, useState } from 'react';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-5238758790551507/1857398497';

const Interstitial = () => {
  const [loaded, setLoaded] = useState(false);
  const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    keywords: ['fashion', 'clothing'],
  });

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
      interstitial.show(); 
    });

    
    interstitial.load();

    
    return unsubscribe;
  }, []);

  
  if (!loaded) {
    return null;
  }
  return null;
};

export default Interstitial;