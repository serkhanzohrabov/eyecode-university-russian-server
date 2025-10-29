import { result_data } from "@/data/students";

export function findStudentById(id) {
        return result_data.find((student) => student.student_id === `#${id}`);
}