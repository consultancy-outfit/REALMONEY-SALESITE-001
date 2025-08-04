import { FormProvider as Form } from "react-hook-form";

export default function FormProvider(props) {
  const { children, onSubmit, methods, style } = props;
  return (
    <Form {...methods}>
      <form style={style} onSubmit={onSubmit}>
        {children}
      </form>
    </Form>
  );
}
