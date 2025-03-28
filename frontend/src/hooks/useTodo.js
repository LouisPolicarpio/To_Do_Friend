import { useMutation, useQuery ,useQueryClient } from '@tanstack/react-query';
import { createTodo,getTodo,editTodo, deleteTodo,} from '../services/todoService';  // Correct path

export const useCreateTodo = () => {
  const queryClient = useQueryClient(); // Get the queryClient instance
  return useMutation({
    mutationFn: createTodo,  // Ensure `createTodo` is the function being used here
    onError: (error) => {
      console.error('Error creating todo:', error);
    },
    onSuccess: () => {
      console.log('Todo successfully created');
      queryClient.invalidateQueries({ queryKey: ['todos'] }); // Properly invalidate queries    }
    }
  });
};

export const useGetTodo =()=>{
  return useQuery({
    queryKey: ['todos'], // Unique identifier for caching
    queryFn: getTodo,   // Function to fetch data
  });
};

export const useEditTodo = () => {
  const queryClient = useQueryClient(); // Get the queryClient instance

  return useMutation({
    mutationFn: editTodo,  // Ensure `editTodo` is the function being used here
    onError: (error) => {
      console.error('Error creating todo:', error);
    },
    onSuccess: () => {
      console.log('Todo successfully edited');
      queryClient.invalidateQueries({ queryKey: ['todos'] }); // Properly invalidate queries    
      }
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient(); // Get the queryClient instance
  return useMutation({
    mutationFn: deleteTodo,  // Ensure `delete` is the function being used here
    onError: (error) => {
      console.error('Error deleing todo:', error);
    },
    onSuccess: () => {
      console.log('Todo successfully created');
      queryClient.invalidateQueries({ queryKey: ['todos'] }); // Properly invalidate queries    }
    }
  });
};