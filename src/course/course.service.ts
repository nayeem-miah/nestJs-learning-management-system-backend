import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schemas';
import { Model } from 'mongoose';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private CourseModel: Model<Course>) { }
  async create(createCourseDto: CreateCourseDto) {

    return await this.CourseModel.create({
      name: createCourseDto.name,
      description: createCourseDto.description,
      level: createCourseDto.level,
      price: createCourseDto.price
    })
  }

  async findAll() {
    return await this.CourseModel.find();
  }

  async findOne(id: string) {
    return await this.CourseModel.findById(id);
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.CourseModel.updateOne({ _id: id }, updateCourseDto);
  }

  async remove(id: string) {
    return await this.CourseModel.deleteOne({ _id: id });
  }
}
