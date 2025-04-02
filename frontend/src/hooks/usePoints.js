import { useMutation, useQuery ,useQueryClient } from '@tanstack/react-query';
import { getPoints, editPoints} from '../network/services/pointsService';

export const useGetPoints =()=>{
    return useQuery({
        queryKey:['points'],
        queryFn: getPoints,
    });
};

export const useEditPoints = () =>{
    const queryClient = useQueryClient(); // Get the queryClient instance


    return useMutation({
        mutationFn:editPoints,
        onError: (error) => {
            console.error('Error editing points:', error);
        },
        onSuccess: () =>{
            console.log('points successfully edited');
            queryClient.invalidateQueries({ queryKey: ['points'] }); // Properly invalidate queries    
        }
    });



};