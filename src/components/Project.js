import GitHub from '../assets/GitHub-Mark.png'

export default function Project(props) {
  return (
    // <div className="text-center">
    //   <a href={props.project.Deployed}>
    //     <img
    //       src={require(`../assets/${props.project.Image}`)}
    //       alt={props.project.Name}
    //       className="project-image"
    //     />
    //   </a>
    //   <a href={props.project.Repository}><img src={GitHub} className="github-image"></img></a>
    // </div>

<div class="card" >
<img src={require(`../assets/${props.project.Image}`)} class="card-img-top" alt={props.project.Name}/>
<div class="card-body">
  <h5 class="card-title">{props.project.Name}</h5>
  <a href={props.project.Repository}><img src={GitHub} className="github-image"></img></a>
</div>
</div>
  );
}