import { Link } from 'react-router-dom';
import Project from '../components/Project';
// Import the background pattern CSS
import '../style.scss';

// Portfolio content
export default function Portfolio() {
  return (
    <div>
      <div className="h3-portfolio">Portfolio</div>
      <div className="container pt-0 flex-row portfolio-grid">
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://tonymagr.github.io/project1-trailer-phone-imyou/">
              <div style={{ textAlign: 'center' }}>
                <img className="image-border-lightgreen" src="\movie_reel.jpg" alt="Movie-Phone Title Search" style={{ width: '150px', marginLeft: '0px', marginTop: '-4px' }} />
                <div>Movie-Phone Title Search</div>
              </div>
            </Link>,
          ]}
        />
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/">
              <div style={{ textAlign: 'center' }}>
                <img className="image-border-lightblue" src="\recipes.jpg" alt="Culinary Connect" style={{ width: '150px', marginLeft: '0px', marginTop: '-4px' }} />
                <div>Culinary Connect</div>
              </div>
            </Link>,
          ]}
        />
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://tech-blog-w-postgres-5fe3b6c87bcb.herokuapp.com">
              <div style={{ textAlign: 'center' }}>
                <img className="image-border-lightgreen" src="\blog.jpg" alt="Tech Blog" style={{ width: '110px', marginLeft: '0px', marginTop: '-4px' }} />
                <div>Tech Blog</div>
              </div>
            </Link>,
          ]}
        />
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://text-editor-for-device.onrender.com/">
              <div style={{ textAlign: 'center' }}>
                <img className="image-border-lightblue bg-lightgray" src="\favicon.ico" alt="Text Editor" style={{ width: '90px', marginLeft: '0px', marginTop: '-4px' }} />
                <div>Text Editor</div>
              </div>
            </Link>,
          ]}
        />
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://full-stack-service-app.onrender.com/">
              <div style={{ textAlign: 'center' }}>
                <img className="image-border-lightblue" src="\home_installation.jpg" alt="Skill Magnet" style={{ width: '130px', marginLeft: '0px', marginTop: '-4px' }} />
                <div>Skill Magnet</div>
              </div>
            </Link>,
          ]}
        />
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://tonymagr.github.io/weather-dashboard-search/">
              <div style={{ textAlign: 'center' }}>
                <img className="image-border-lightgreen" src="\weather.jpg" alt="Weather Dashboard" style={{ width: '110px', marginLeft: '0px', marginTop: '-4px' }} />
                <div>Weather Dashboard</div>
              </div>
            </Link>,
          ]}
        />
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://tonymagr.github.io/work-day-scheduler-3rd-party-apis/">
              <div style={{ textAlign: 'center' }}>
                <img className="image-border-lightblue" src="\daily_planner.jpg" alt="Work Day Scheduler" style={{ width: '100px', marginLeft: '0px', marginTop: '-4px' }} />
                <div>Work Day Scheduler</div>
              </div>
            </Link>,
          ]}
        />
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://tonymagr.github.io/quiz-game/">
              <div style={{ textAlign: 'center' }}>
                <img className="image-border-lightgreen" src="\web_app_dev.jpg" alt="Quiz Game" style={{ width: '150px', marginLeft: '0px', marginTop: '-4px' }} />
                <div>Quiz Game</div>
              </div>
            </Link>,
          ]}
        />
      </div>
    </div>
  );
}