<script>
    import { Form, Field, Textarea, ErrorMessage } from "svelte-forms-lib";
    import * as yup from "yup";
    import { db } from "../firebase"

    import { getNotificationsContext } from 'svelte-notifications';
    const { addNotification } = getNotificationsContext();
    
    
    
    const formProps = {
      initialValues: { name: "", email: "", message:"" },
      validationSchema: yup.object().shape({
        name: yup.string().required(),
        email: yup
          .string()
          .email()
          .required(),
        message: yup.string().required()
      }),
      onSubmit: values => {
        //db.collection('contacts').add(values)
        document.querySelector('#name').value = ""
        document.querySelector('#email').value = ""
        document.querySelector('#message').value = ""

        addNotification({
            text: 'Message Sent',
            position: 'top-center',
            type: 'success',
            removeAfter: 4000
        })
      }
    };


</script>

<section id="formSection">
    <div class="container">
        <div class="pinPoint"></div>
        <div class="formContainer">
            <Form {...formProps}>
                <label for="name">name</label>
                <Field class="form-field" name="name" id="name" />
                <ErrorMessage class="form-error" name="name" />
            
                <label for="email">email</label>
                <Field class="form-field" name="email" id="email" />
                <ErrorMessage class="form-error" name="email" />
            
                <label for="message">message</label>
                <Textarea class="form-textarea" name="message" id="message" />
                <ErrorMessage class="form-error" name="message"/>

                <div class="buttonWrap">
                    <button type="submit" class="blackBtn">
                        <div class="neumorphism">
                            Send Message
                        </div>
                    </button>
                </div>
            </Form>
            
        </div>
    </div>
</section>

<style>
    #formSection {
        padding: 50px 0;
        margin-bottom: 100px;
    }
    .container{
        justify-content: space-between;
    }

    .pinPoint {
        height: 300px;
        width: 250px;
        margin: auto;
        background-image: url("/images/location.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .formContainer {
        width: 300px;
    }

    .buttonWrap {
        display: flex;
        margin-top: 25px;
        justify-content:flex-end;
        align-items: flex-end;
    }

    .blackBtn {
        margin: 0;
    }

    /* Form Styling */

    :global(.form-field) {
        font-family: monospace;
        width: 100%;
        height: 1.5rem;
        border-radius: 10px;
        padding: 18px;
        border: none;
        background-color: rgba(0, 0, 0, 0.14);
    }
    :global(.form-field:focus) {
        border-color: #5be2a9;
        box-shadow: 0 0 0 5px #a4ffd9;
    }
    :global(.form-textarea) {
        font-family: monospace;
        width: 100%;
        border-radius: 10px;
        height: 4rem;
        border: none;
        background-color: rgba(0, 0, 0, 0.14);
    }
    :global(.form-error) {
        font-family: monospace;
        display: block;
        font-size: 12px;
        color: #ff6b6b;
        margin-top: 10px;
    }
    label {
        display: block;
        color: var(--grey-dark);
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 4px;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 1.9px;
        line-height: 2;
    }

    @media only screen and (max-width: 650px) {
        .formContainer{
            padding-left: 15px;
            padding-right: 15px;
            width: 100%;
        }
        #formSection .container{
            display: flex;
            flex-direction: column;
        }
        .pinPoint{
            width: 100%;
        }
    }

</style>