import { Link } from 'react-router-dom';
import Project from '../components/Project';

// Portfolio content
export default function Portfolio() {
  return (
    <div>
      <h3>Portfolio</h3>
      <div className="container pt-4 flex-row">
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://tonymagr.github.io/project1-trailer-phone-imyou/">
              Movie-Phone Title Search
            </Link>,
          ]}
        />
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/">
              Culinary Connect
            </Link>,
          ]}
        />
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://tech-blog-w-postgres-5fe3b6c87bcb.herokuapp.com">
              <div style={{ textAlign: 'center' }}>
                <img src="\blog.jpg" alt="Tech Blog" style={{ width: '110px', marginLeft: '-11px', marginTop: '-4px' }} />
                <div>Tech Blog</div>
              </div>
            </Link>,
          ]}
        />
        
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://text-editor-for-device.onrender.com/">
              Text Editor
            </Link>,
          ]}
        />
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://full-stack-service-app.onrender.com/">
              Skill Magnet
            </Link>,
          ]}
        />
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://tonymagr.github.io/weather-dashboard-search/">
              Weather Dashboard
            </Link>,
          ]}
        />
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://tonymagr.github.io/work-day-scheduler-3rd-party-apis/">
              Work Day Scheduler
            </Link>,
          ]}
        />
        <Project
          links={[
            <Link key={1} className="nav-link text-dark" target="_blank"
              to="https://tonymagr.github.io/quiz-game/">
              Quiz Game
            </Link>,
          ]}
        />
      </div>
    </div>
  );
}