export default function({student, school}) {
    console.log(student)
    return (
        <>
            <h2>{student.nome}</h2>
            <span className="block">{student.turma.nomeTurma}</span>
            <span className="block">{school}</span>

            <hr className="my-6" />
        </>
    )
}