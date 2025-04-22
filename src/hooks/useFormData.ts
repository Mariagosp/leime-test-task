import { Meme } from "@/types/Meme";
import { useEffect, useState } from "react";

export const useFormData = (meme: Meme) => {
  const [formData, setFormData] = useState<Meme | null>(meme);

  useEffect(() => {
    if (formData) {
      setFormData(meme);
    }
  }, [meme]);

  const handleFormDataChange = (field: keyof Meme, value: string | number) => {
    setFormData((prevFormData) => {
      if (prevFormData) {
        return { ...prevFormData, [field]: value };
      }
      return prevFormData;
    });
  };

  const isTitleInvalid = () => {
    if (formData?.title) {
      return formData?.title.length < 3 || formData?.title.length > 100;
    }
  };

  const isFormValid = () => {
    if (formData) {
      return (
        formData.title.trim().length >= 3 &&
        formData.title.trim().length <= 100 &&
        /^https?:\/\/.+\.jpg$/.test(formData.image) &&
        formData.likes >= 0 &&
        formData.likes <= 99
      );
    }
  };

  return {
    formData,
    handleFormDataChange,
    isTitleInvalid,
    isFormValid,
  }
}