import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Home.css'

function Home() {

  // const auth = useAuth()
  // const navigate = useNavigate()
  // const handleSignout = () => {
  //   auth.signout();
  //   navigate('/signin')
  // }

  return (
    <div className='home' color='red'>
      {/* <div>
        <button onClick={handleSignout}>logout</button>
      </div> */}
      <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div class="container">
          <div class="video-container">
            <div class="post">
              <div class="video-player">
                <video poster="https://wallpapercave.com/wp/wp4273083.jpg" src="https://dankmemeryt.000webhostapp.com/wp-content/uploads/2020/12/Iron%20Man%20_%20Whatsapp%20Status%20_%20Instagram%20Story%20_%20-%20YoutubeShort%20(%20720%20X%20406%20).mp4" autoplay="" loop="" class="post-video"></video>
              </div>
              <div class="side-bar">
                <div class="side-icon profile-follow">
                  <div class="profile-logo">
                    <img src="https://assets.codepen.io/2483051/internal/avatars/users/default.png?fit=crop&format=auto&height=80&version=1636466200&width=80" class="profile-logo-img" alt="" />
                  </div>
                  <i class="fa fa-plus"></i>
                </div>
                <div class="side-icon like-btn">
                  <i class="fa fa-heart-o like-icon"></i>
                  <p class="like-number">789</p>
                </div>

                <div class="side-icon comment-btn">
                  <i class="fa fa-comment comment-icon"></i>
                  <p class="comment-number">184</p>
                </div>

                <div class="side-icon share-btn">
                  <i class="fa fa-share share-icon"></i>
                  <p class="share-number">10</p>
                </div>

              </div>
              <div class="post-comments ">
                <span class="close-comment">&times;</span>
                <div class="post-comments-area">
                  <div class="post-comment">
                    <div class="post-comment-user">
                      <img src="https://assets.codepen.io/2483051/internal/avatars/users/default.png?fit=crop&format=auto&height=80&version=1636466200&width=80" class="post-comment-user-img" />
                    </div>
                    <div class="post-comment-content">
                      <div class="post-comment-user-name verfied">
                        <a href="https://instagram.com/sahilverma.dev">sahilverma.dev</a>
                        <i class="fa fa-check post-comment-user-verified"></i>
                      </div>
                      <div class="post-comment-user-msg">
                        Follow me on instagram
                      </div>
                    </div>
                    <div class="post-comment-like-btn">
                      <i class="fa fa-heart-o post-comment-like-icon"></i>
                      <p class="post-comment-like-number">9</p>
                    </div>
                  </div>
                </div>
                <div class="post-comment-input">
                  <input type="text" name="" class="post-comment-text" placeholder="Enter somethings good...." />
                  <button class="post-comment-send"><i class="fa fa-send send-btn"></i></button>
                </div>
              </div>
              <div class="post-footer">
                <div class="username verfied">
                  <a href="https://instagram.com/sahilverma.dev" class="username-link">sahilverma.dev</a>
                  <i class="fa fa-check verfied-icon"></i>
                </div>
                <p class="post-description">
                  This is a Tik Tok Clone with working Video Player, Like button and comment. But comments dosen't store in any backend.
                </p>

                <div class="music-name">
                  <i class="fa fa-music"></i>
                  <marquee behavior="" direction="" class="song-name">Tungevaag, Raaban - Bad Boy </marquee>
                </div>

              </div>
              <div class="disc-logo">
                <img src="https://www.nicepng.com/png/detail/329-3297274_compact-disc-cd-comments-disc-icon-png.png" alt="" class="disc-logo-img" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;