class Recipe {
  constructor({
    id,
    image,
    title,
    preparationTime,
    category,
    amount,
    rank,
    remark,
    healthy_remark,
    ingredients,
    instructions,
  }) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.preparationTime = preparationTime;
    this.category = category;
    this.amount = amount;
    this.rank = rank;
    this.remark = remark;
    this.healthy_remark = healthy_remark;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}

export default Recipe;
