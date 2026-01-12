function CourseCard({ course, isActive, onClick }) {
  return (
    <div
      className={`course-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <h3>{course.title}</h3>
      <p>{course.description}</p>
    </div>
  );
}

export default CourseCard;