"use client"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { Favourite } from "../types/favourite";
import { FetchFavourites, DeleteFromFavourites, AddToFavourites } from "../api/favourites";

interface AddToFavouritesArgs {
  product_id: number;
}

interface DeleteFromFavouritesArgs {
  product_id: number;
}

function useFavourites(user_id: string | number) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const {
    data: favouritesData,
    isLoading: isFavouritesLoading,
    error: favouritesError,
  } = useQuery<Favourite[]>({
    queryKey: ["favourites"],
    queryFn: () => FetchFavourites(user_id),
  });

  const addToFavouritesMutation = useMutation({
    mutationFn: ({ product_id }: AddToFavouritesArgs) =>
      AddToFavourites(user_id, product_id),
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: "Item added to favourites", // Assuming the response body contains a 'message' field
        variant: "success",
      });
    },
    onError: (error: Error) => {
      toast({ title: "Error", description: error.message, variant: "error" });
    },
  });

  const deleteFromFavouritesMutation = useMutation({
    mutationFn: ({ product_id }: DeleteFromFavouritesArgs) =>
      DeleteFromFavourites(user_id, product_id),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Item removed from favourites",
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
    onError: (error: Error) => {
      toast({ title: "Error", description: error.message, variant: "error" });
    },
  });

  const handleAddToFavourites = async (product_id: number) => {
    try {
      await addToFavouritesMutation.mutateAsync({ product_id });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteFromFavourites = async (product_id: number) => {
    try {
      await deleteFromFavouritesMutation.mutateAsync({ product_id });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    favouritesData,
    isFavouritesLoading,
    favouritesError,
    handleAddToFavourites,
    handleDeleteFromFavourites,
  };
}

export default useFavourites;
