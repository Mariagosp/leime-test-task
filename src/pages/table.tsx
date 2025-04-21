import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Button } from "@heroui/button";

import { memes } from "../utils/memes";
import { useDisclosure } from "@heroui/modal";
import { ModalWindow } from "@/components/modal";
import { Meme } from "@/types/Meme";
import { useEffect, useState } from "react";
import { getStoredMemes, saveMemes } from "@/utils/storage";

export default function TablePage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [memesList, setMemesList] = useState<Meme[]>(memes);
  const [activeMeme, setActiveMeme] = useState<Meme | null>(null);

  const handleOpenModal = (meme: Meme) => {
    setActiveMeme(meme);
    onOpen();
  };

  const handleSave = (updatedMeme: Meme) => {
    const newMemes = memes.map((meme) =>
      meme.id === updatedMeme.id ? updatedMeme : meme
    );
    setMemesList(newMemes);
    saveMemes(newMemes);
    // setMemesList(prev => prev.map(meme => meme.id === updatedMeme.id ? updatedMeme : meme));
  };

  useEffect(() => {
    const savedMemes = getStoredMemes();
    if (savedMemes.length) {
      setMemesList(savedMemes);
    }
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 ">
        <div className="w-full max-w-6xl px-4 text-center justify-center">
          {/* <div className="inline-block  text-center justify-center"> */}
          <h1 className={`${title()} mt-0`}>Table</h1>

          <Table
            className="w-full mt-10"
            aria-label="Example static collection table"
          >
            <TableHeader>
              <TableColumn className="text-center">ID</TableColumn>
              <TableColumn className="text-center">NAME</TableColumn>
              <TableColumn className="text-center">LIKES</TableColumn>
              <TableColumn className="text-center">ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
              <>
                {memesList.map((meme) => (
                  <TableRow key={meme.id}>
                    <TableCell className="text-center">{meme.id}</TableCell>
                    <TableCell className="text-center">{meme.title}</TableCell>
                    <TableCell className="text-center">{meme.likes}</TableCell>
                    <TableCell className="text-center">
                      <Button onPress={() => handleOpenModal(meme)}>
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            </TableBody>
          </Table>
        </div>
      </section>

      {isOpen && (
        <ModalWindow
          meme={activeMeme}
          handleSave={handleSave}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
      )}
    </DefaultLayout>
  );
}
