import Employment from "./Employment";

function EmploymentHistory({ employments, deleteEmployments }) {
  return (
    <>
      {employments.map((employment) => {
        return (
          <Employment
            deleteEmployments={deleteEmployments}
            key={employment.id}
            employment={employment}
          />
        );
      })}
    </>
  );
}

export default EmploymentHistory
