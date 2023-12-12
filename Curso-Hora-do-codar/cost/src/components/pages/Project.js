import styles from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { Loading}  from '../layouts/Loading'
import {Container} from '../layouts/Container'
import {Message} from '../layouts/Message'
import {ProjectForm} from '../project/ProjectForm'

export function Project() {
    const { id } = useParams()

    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect (() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
              .then((resp) => resp.json())
              .then((data) => {
                 setProject(data)
                })
                .catch((err) => console.log)
        }, 300)
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    

    function editPost(project) {
        setMessage('')

        // budget validation
        if(project.budget < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(project),
            })
            .then(resp => resp.json())
            .then((data) => {
                
                setProject(data)
                setShowProjectForm(false)
                setMessage('Projeto atualizado!')
                setType('success')
            })
            .catch(err => console.log(err))
    }

    return (
        <>{project.name ? (
            <div className={styles.project_details}>
                <Container customClass="column" >
                    {message && <Message type={type} msg={message} />}
                    <div className={styles.details_container}>
                        <h1>Projeto: {project.name}</h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>
                            {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                        </button>
                        {!showProjectForm ? ( //se n tiver ativado o 'showProjectForm' = 'editar projeto', que seria sem clicar neme
                            <div className={styles.project_info}>
                              <p> {/*ativar isso */}
                                 <span>Categoria:</span> {project.category.name}
                              </p>
                              <p>
                                 <span>Total de Orçamento:</span> ${project.budget}
                              </p> 
                              <p>
                                 <span>Total Utilizado:</span> ${project.cost}
                              </p> 
                            </div>
                        ) : ( //se não, que seria clicando no 'editar projeto' e mostrando o fechar
                            <div className={styles.project_info}>
                                <ProjectForm
                                handleSubmit={editPost}
                                btnText="Concluir edição"
                                projectData={project} /> {/*ativar isso */}
                            </div>
                        )}
                    </div>
                    <div className={styles.service_form_container}>
                        <h2>Adicione um serviço:</h2>
                        <button className={styles.btn} onClick={toggleServiceForm}>
                            {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                        </button>
                        <div className={styles.project_info}>
                            {showServiceForm && <div>formulário do serviço</div>}
                        </div>
                    </div>
                    <h2>Serviços</h2>
                    <Container customClass="start">
                        <p>Itens de serviços</p>
                    </Container>
                </Container>
            </div>
        ) : (
         <Loading />
        )}
    </>
    )
}
      