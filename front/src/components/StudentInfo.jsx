export default function({student, school}) {
    console.log(student)
    return (
        <div>
            <h2>{student.nome}</h2>
            <span className="block text-sm my-3">{student.turma.nomeTurma}</span>
            <span className="block text-sm">{school}</span>
        </div>
    )
}