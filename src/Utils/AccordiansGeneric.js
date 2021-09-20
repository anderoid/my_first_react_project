import {Accordion, Table} from "react-bootstrap";
import {React} from "react";


const AccordiansGeneric = (props) => {

    const boomer = ['Subject Name', 'Marks']
    const subjData = [
        {
            subjectName: 'Mathematics',
            grade: 3.26
        },
        {
            subjectName: 'Physiology',
            grade: 3.42
        }, {
            subjectName: 'Social',
            grade: 2.9
        }
    ];

    return <div>
        <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
                <Accordion.Header>{props.name}</Accordion.Header>
                <Accordion.Body>

                    <Table striped bordered hover>
                        <thead>
                        <tr>

                            {boomer.map(person => <th>{person}</th>)}

                        </tr>
                        </thead>
                        <tbody>

                        {subjData.map(subjectDetail => <tr>

                            <td>
                                {subjectDetail.subjectName}
                            </td>
                            <td>
                                {subjectDetail.grade}
                            </td>

                        </tr>)}
                        </tbody>
                    </Table>
                    {`Name: ${props.name}`}
                    {'                          |||                    '}
                    {`Student ID: ${props.id}`}
                    {'                          |||                    '}
                    {`Semester 1 Grade : ${props.sem1Grade}`}
                    {'                          |||                    '}
                    {`Semester 1 Grade : ${props.sem2Grade}`}
                    {'                          |||                    '}
                    {`Semester Average Grade : ${(Number(props.sem1Grade) + Number(props.sem2Grade)) / 2}`}

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    </div>


}

export default AccordiansGeneric;
