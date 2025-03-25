import { useMutation } from '@tanstack/react-query';
import { createTodo } from '../services/todoService';  // Correct path

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: createTodo,  // Ensure `createTodo` is the function being used here
    onError: (error) => {
      console.error('Error creating todo:', error);
    },
    onSuccess: () => {
      console.log('Todo successfully created');
    }
  });
};
