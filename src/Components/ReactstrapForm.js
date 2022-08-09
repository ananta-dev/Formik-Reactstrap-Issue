// This is a React component
import { useFormik } from 'formik';
import { useState } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    Row,
    Col,
    Label,
    Form,
    Input,
    Card,
    CardBody,
} from 'reactstrap';

const ReactstrapForm = () => {
    const [showModal, setShowModal] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: values => {
            alert(`Form submitted with name: ${values.name}`);
        },
    });

    const onCancelClick = () => {
        setShowModal(false);
    };

    return (
        <>
            <Modal
                isOpen={showModal}
                toggle={onCancelClick}
                centered
                size='md'
                className='border-0'
                modalClassName='zoomIn'
            >
                <ModalHeader
                    toggle={onCancelClick}
                    className='p-3 bg-soft-info'
                >
                    Formik + Bootstrap/Reactstrap Form
                </ModalHeader>
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                        formik.handleSubmit();
                        return false;
                    }}
                >
                    <ModalBody>
                        <Row>
                            <Col lg={12}>
                                <Card className='h-100'>
                                    <CardBody className='h-100 d-flex flex-column'>
                                        <div className='mb-4'>
                                            <Label
                                                className='form-label'
                                                htmlFor='dataset-name'
                                            >
                                                Name:
                                            </Label>
                                            <Input
                                                type='text'
                                                className='form-control'
                                                id='reactstrap-form-name'
                                                placeholder='Enter your name here'
                                                validate={{
                                                    required: { value: true },
                                                }}
                                                onChange={formik.handleChange}
                                                value={formik.values.name}
                                                invalid={
                                                    formik.touched.name &&
                                                    formik.errors.name
                                                        ? true
                                                        : false
                                                }
                                            />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </ModalBody>
                    <div className='modal-footer'>
                        <div className='hstack gap-2 justify-content-end'>
                            <button
                                onClick={onCancelClick}
                                type='button'
                                className='btn btn-light'
                                data-bs-dismiss='modal'
                            >
                                Cancel
                            </button>
                            <button
                                type='submit'
                                className='btn btn-success'
                                id='add-btn'
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </Form>
            </Modal>
            <button onClick={() => setShowModal(true)} className='mt-4 mb-4'>
                Open Modal
            </button>
        </>
    );
};

export default ReactstrapForm;
