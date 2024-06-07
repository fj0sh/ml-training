import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductTypeDto } from './dto/productType.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get('id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(+id);
  }

  @Get('stocks')
  getStocks() {
    return this.productService.getProductStocks();
  }

  @Patch(':id')
  editProducts(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.editProducts(+id, updateProductDto);
  }

  @Delete(':id')
  removeProducts(@Param('id') id: number) {
    return this.productService.removeProduct(+id);
  }

  // ==========types======================
  @Get('type')
  getTypes() {
    return this.productService.getProductTypes();
  }

  @Post('type')
  addNewType(@Body() productTypeDto: ProductTypeDto) {
    return this.productService.addNewType(productTypeDto);
  }
}
