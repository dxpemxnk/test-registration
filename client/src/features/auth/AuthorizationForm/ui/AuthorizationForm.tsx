import { CLIENT_ROUTES } from "@/app/router";
import { authorization } from "@/entities/user/model/userThunk";
import { useAppDispatch } from "@/shared/hooks/rtkHooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AuthorizationForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Асинхронный вызов dispatch
      const response = await dispatch(authorization({ email, password })).unwrap();
      if (response && response.user.id) {
        // Перенаправляем пользователя на страницу с его ID
        navigate(`${CLIENT_ROUTES.HOME}`);
      } else {
        console.error("ID пользователя не найден в ответе сервера");
      }
    } catch (error) {
      // Обработка ошибки
      setIsModalOpen(true);
      console.error("Ошибка авторизации:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form onSubmit={authHandler}>
        <input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          required
          placeholder="Your email"
        />
        <input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          type="password"
          required
          placeholder="Your password"
        />
        <button type="submit" disabled={!email || !password}>
          Auth
        </button>
      </form>
      {isModalOpen && (
        <div>
          <div>
            <p>Email не найден в базе данных.</p>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </>
  );
}