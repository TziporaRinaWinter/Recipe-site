class Recipe {
  constructor({
    id,
    image,
    title,
    preparationTime,
    category,
    rank,
    remark,
    instructions,
  }) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.preparationTime = preparationTime;
    this.category = category;
    this.rank = rank;
    this.remark = remark;
    this.instructions = instructions;
  }
}

export default Recipe;
