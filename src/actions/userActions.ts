// userActions.ts
"use server";
import supabase from "@/src/utils/supabase";
import dotenv from "dotenv";

dotenv.config();

export const getUser = async (userId: number) => {
    try {
        const { data, error } = await supabase
            .from("bruker")
            .select("*")
            .eq("BrukerID", userId)
            .single(); // Fetch the single user by ID
        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

export const deleteUser = async (userId: number) => {
    try {
        const { error } = await supabase
            .from("bruker")
            .delete()
            .eq("BrukerID", userId);
        if (error) throw error;
        return true;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
};

export const changePassword = async (userId: number, newPassword: string) => {
    try {
        const { error } = await supabase
            .from("bruker")
            .update({ Passord: newPassword })
            .eq("BrukerID", userId);
        if (error) throw error;
        return true;
    } catch (error) {
        console.error("Error updating password:", error);
        throw error;
    }
};
