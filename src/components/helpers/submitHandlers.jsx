export const onSubmitHandler = async (e, submitFunction, form) => {
    e.preventDefault();
    let result;
    try{
    await submitFunction({
      variables: {
        ...form
      },
      onCompleted: (data) => {
          result = data // the response
      }
    })
    return result;
    } catch(err) {
        return err
    }
  };
