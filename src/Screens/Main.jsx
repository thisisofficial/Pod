import React from 'react'
import {App, MainCont, ContLeft, ContRight, Cont, ContEsp, Dots} from './Molecules/Particles/container.jsx';
import { Text, Title, TitleEnph } from './Molecules/Particles/text.jsx';
import { Icons } from './Molecules/Particles/image.jsx';
import imagehost from '/src/assets/desktop/image-host.jpg';
import imagehostTablet from '/src/assets/tablet/image-host.jpg';
import google from '/src/assets/desktop/google-podcasts.svg';
import spotify from '/src/assets/desktop/spotify.svg';
import pocketcasts from '/src/assets/desktop/pocket-casts.svg';
import apple from '/src/assets/desktop/apple-podcast.svg';
import dots from '/src/assets/desktop/bg-pattern-dots.svg';
import logo from '/src/assets/desktop/logo.svg';
import { SearchBar } from './Molecules/SearchBar.jsx';

export function Main() {
  return (
    <App>
        
        <MainCont>
        
            <ContLeft>
                <Cont height="20%" align="top" justify="left" flex fade resetphonewidth>
                    <img src={logo}/>
                </Cont>
                <Cont align="flex-end" justify="left" flex bg fade>
                    <Cont width="100%" height="auto" resetphone>
                        <Title>Publish your podcasts <TitleEnph>Everywhere.</TitleEnph></Title>
                        <Cont width="65%" resetphonewidth auto>
                            <Text>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</Text>
                        </Cont>
                        <ContEsp height="40%">
                            <Cont>
                                <SearchBar></SearchBar>
                            </Cont>
                            <Cont flex justify="space-between" width="100%">
                                <Icons src={spotify}/>
                                <Icons src={apple}/>
                                <Icons src={google}/>
                                <Icons src={pocketcasts}/>
                            </Cont> 
                        </ContEsp>
                    </Cont>
                </Cont>
                <Dots Dots={dots}/>
            </ContLeft>
            <ContRight bgDesk={imagehost} bgTablet={imagehostTablet}>
            
            </ContRight>
        </MainCont>
    </App>
  )
}
