import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from './styled';

const Profile = () => {

    const { githubState } = useGithub();

    return (
        <S.Container>
            <S.WrapperImg src="https://avatars.githubusercontent.com/u/93546362?v=4" alt="avatar of user"/>
            <S.WrapperUserInfo>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUserName>
                        <h3>Username:</h3>
                        <a href={githubState.user.html_url} target="_blank" rel="noreferrer">
                            {githubState.user.login}</a>
                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>

                    <div>
                        <h4>Gists</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>

                    <div>
                        <h4>Following</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperUserInfo> 
        </S.Container>
    )
}

export default Profile;