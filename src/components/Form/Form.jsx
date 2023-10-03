import { useForm } from "react-hook-form";
import style from "./Forms.module.css";

function Form({ Login, errLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(data => {
    Login(data);
  });

  return (
    <form onSubmit={onSubmit} className={style.form}>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        {...register("email", {
          required: {
            value: true,
            message: "El email es requerido",
          },
          maxLength: {
            value: 35,
            message: "El email debe tener como maximo 35 caracteres",
          },
          pattern: {
            // eslint-disable-next-line no-useless-escape
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/,
            message: "El correo no es válido",
          },
        })}
      />

      {errors.email && <span>{errors.email.message}</span>}

      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        maxLength={10}
        minLength={6}
        {...register("password", {
          required: {
            value: true,
            message: "La contraseña es requerida",
          },
          pattern: {
            value: /(?=.*[0-9])/,
            message: "La contraseña debe tener al menos 1 dígito",
          },
        })}
      />

      {errors.password && <span>{errors.password.message}</span>}

      {errLogin && <span>Correo o contraseña incorrectas</span>}

      <button>Submit</button>
    </form>
  );
}

export default Form;
