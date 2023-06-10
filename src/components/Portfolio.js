import Project from './Project';

export default function Portfolio() {
    const projects = [
        { Name: 'Java-Password', Image: 'Javapassword.png', Deployed: 'https://danny2727.github.io/Javapassword-project/', Repository: 'https://github.com/Danny2727/Javapassword-project' },
        { Name: 'Virtual-CalanderApp', Image: 'Virtual-Calander.png', Deployed: 'https://danny2727.github.io/virtual-calanderapp/', Repository: 'https://github.com/Danny2727/virtual-calanderapp' },
        { Name: 'WebDevBloggers', Image: 'WebBlog.png', Deployed: 'https://webdevbloggers.herokuapp.com', Repository: 'https://github.com/Danny2727/webdevbloggers' },
        { Name: 'Virtual Notetaker', Image: 'Virtual-Notetaker.png', Deployed: 'https://virtualportolio-app.herokuapp.com', Repository: 'https://github.com/Danny2727/virtualnote-taker' },
        { Name: 'The Happy Hour', Image: 'HappyHour.png', Deployed: 'https://qaizen.github.io/TheHappyHour/', Repository: 'https://github.com/Qaizen/TheHappyHour' },
        { Name: 'Web Dev Quiz', Image: 'WebQuiz.png', Deployed: 'https://danny2727.github.io/webdev-quiz/', Repository: 'https://github.com/Danny2727/webdev-quiz' }
    
    ]
    return (
        <div className="d-flex">
        {projects.map((project) => (
          <Project project={project} key={"project=" + project.Name} />
        ))}
      </div>

    );
}