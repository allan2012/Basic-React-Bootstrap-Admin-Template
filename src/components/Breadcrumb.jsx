export default function Breadcrumb(props) {
  return <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="#">Home</a></li>
      <li className="breadcrumb-item active" aria-current="page">{props.activePage}</li>
    </ol>
  </nav>

}