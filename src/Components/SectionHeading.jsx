import './SectionHeading.css'
function SectionHeading({title}) {
    return (
        <div className="section-heading">
            <div className="line"></div>
            <h2>{title}</h2>
            <div className="line"></div>
        </div>
    )
}
export default SectionHeading