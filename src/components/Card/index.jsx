import React from 'react';
import {FiThumbsUp} from 'react-icons/fi';

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'

const Card = () =>  {
  return (
    <CardContainer>
        <ImageBackground src="data:image/jpeg;base64,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" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/111194951?v=4" />
                <div>
                    <h4>Fernando Laterza</h4>
                    <p>Há 5 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de Html e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp Dio Global Avanade ...<strong>Saiba mais</strong> </p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
