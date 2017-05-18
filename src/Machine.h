#ifndef MACHINE_H
#define MACHINE_H

struct Machine
{
  int registers[0x10];
  int memory[0x40000000];

};


#endif
