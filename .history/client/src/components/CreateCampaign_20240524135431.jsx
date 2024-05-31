// src/components/CreateCampaign.js
import { useContext, useState } from "react";
import { createCampaign } from "../utils/contract";

const CreateCampaign = () => {
  const { owner, setOwner, signer, setSigner } = useContext(ContextApi);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [target, setTarget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCampaign(
      signer,
      owner,
      title,
      description,
      target,
      deadline,
      image
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Target (ETH)"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        required
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button type="submit">Create Campaign</button>
    </form>
  );
};

export default CreateCampaign;
