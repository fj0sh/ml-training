import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductTypeDto } from './dto/productType.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    try {
      return await this.prisma.product.create({ data: createProductDto });
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.product.findMany({
        include: {
          productType: {
            select: {
              type: true,
            },
          },
        },
      });
    } catch (error) {
      return error;
    }
  }

  async findOne(id) {
    try {
      return await this.prisma.product.findUnique({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async getProductStocks() {
    try {
      const res = await this.prisma.product.findMany({
        select: {
          productName: true,
          productStock: true,
          productType: {
            select: {
              type: true,
            },
          },
        },
      });
      return res;
    } catch (error) {
      return error;
    }
  }

  async editProducts(id, updateProductDto) {
    try {
      return await this.prisma.product.update({
        where: { id: id },
        data: updateProductDto,
      });
    } catch (error) {
      return error;
    }
  }

  async removeProduct(id) {
    try {
      return await this.prisma.product.delete({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  //=====Types =====

  async getProductTypes() {
    return await this.prisma.product_type.findMany();
  }

  async addNewType(productTypeDto: ProductTypeDto) {
    return await this.prisma.product_type.create({ data: productTypeDto });
  }
}
