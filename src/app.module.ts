import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProductsModule, UsersModule, TransactionsModule, AdminModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
