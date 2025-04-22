import { useFormData } from "@/hooks/useFormData";
import { Meme } from "@/types/Meme";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";

type Props = {
  meme: Meme | null;
  handleSave: (updatedMeme: Meme) => void;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export const ModalWindow: React.FC<Props> = ({
  isOpen,
  handleSave,
  meme,
  onOpenChange,
}) => {
  if (!meme) {
    return;
  }

  const { formData, handleFormDataChange, isTitleInvalid, isFormValid } =
    useFormData(meme);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {"Modal Title " + meme?.title}
              </ModalHeader>
              <ModalBody>
                <Input label="ID" value={formData?.id.toString()} isReadOnly />
                <Input
                  label="Title"
                  value={formData?.title}
                  onChange={(e) =>
                    handleFormDataChange("title", e.target.value)
                  }
                  isInvalid={isTitleInvalid()}
                  errorMessage="3-100 characters"
                  required
                />
                <Input
                  label="Image URL"
                  value={formData?.image}
                  onChange={(e) =>
                    handleFormDataChange("image", e.target.value)
                  }
                  isInvalid={!formData?.image.match(/^https?:\/\/.+\.jpg$/)}
                  errorMessage="Must be valid JPG URL"
                  required
                />
                <Input
                  type="number"
                  label="Likes"
                  value={formData?.likes.toString()}
                  min={0}
                  max={99}
                  onChange={(e) =>
                    handleFormDataChange("likes", +e.target.value)
                  }
                  required
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  isDisabled={!isFormValid()}
                  color="primary"
                  onPress={() => {
                    if (formData && isFormValid()) {
                      handleSave(formData);
                      onClose();
                    }
                  }}
                >
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
