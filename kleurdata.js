//rgb waarden
R = [22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 57, 59, 62, 65, 68, 72, 74, 77, 79, 79, 78, 79, 79, 80, 81, 82, 83, 83, 84, 85, 86, 87, 88, 89, 91, 92, 94, 96, 97, 98, 99, 100, 100, 101, 102, 102, 103, 104, 105, 107, 109, 111, 112, 114, 116, 117, 118, 119, 120, 121, 123, 123, 124, 125, 126, 128, 130, 132, 134, 136, 138, 139, 139, 141, 140, 140, 139, 139, 139, 140, 140, 139, 139, 138, 136, 137, 138, 138, 136, 137, 137, 136, 139, 141, 146, 146, 158, 147, 145, 149, 154, 160, 164, 164, 167, 170, 173, 174, 176, 177, 176, 176, 176, 175, 169, 166, 167, 166, 164, 163, 158, 155, 155, 151, 152, 154, 151, 150, 152, 155, 157, 160, 161, 163, 165, 170, 170, 161, 156, 158, 160, 164, 169, 176, 177, 177, 176, 167, 167, 169, 166, 167, 168, 172, 174, 175, 175, 168, 162, 162, 165, 170, 175, 179, 182, 188, 195, 195, 192, 192, 193, 193, 188, 184, 185, 166, 158, 155, 154, 156, 155, 156, 165, 169, 169, 171, 171, 171, 173, 173, 172, 171, 172, 177, 172, 180, 189, 189, 187, 182, 185, 187, 187, 188, 187, 182, 169, 165, 163, 163, 165, 166, 167, 168, 169, 166, 168, 168, 169, 172, 174, 180, 178, 172, 172, 174, 175, 179, 177, 177, 177, 177, 175, 174, 176, 179, 195, 199, 199, 201, 196, 203, 218, 217, 223, 221, 217, 216, 215, 209, 210, 199, 190, 182, 176, 172, 171, 171, 168, 165, 162, 158, 155, 152, 151, 149, 148, 147, 145, 144, 143, 142, 142, 141, 141, 141, 141, 141, 141, 140, 140, 140, 140, 141, 141, 141, 141, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 143, 143, 143, 143, 144, 145, 145, 145, 145, 144, 144, 143, 143, 143, 143, 143, 142, 141, 141, 142, 142, 141, 142, 140, 141, 141, 141, 141, 140, 140, 140, 140, 139, 140, 140, 139, 139, 140, 139, 139, 139, 139, 140, 140, 140, 140, 139, 139, 138, 138, 138, 138, 138, 138, 137, 137, 136, 136, 136, 136, 136, 137, 136, 135, 135, 134, 134, 135, 134, 134, 134, 133, 134, 133, 133, 133, 133, 134, 134, 132, 132, 132, 132, 133, 133, 132, 132, 132, 132, 131, 131, 131, 131, 131, 131, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 129, 130, 129, 129, 129, 128, 128, 128, 128, 128, 128, 127, 127, 127, 127, 127, 127, 127, 127, 127, 126, 125, 125, 125, 125, 125, 125, 126, 125, 125, 125, 125, 125, 126, 126, 126, 124, 124, 125, 125, 125, 127, 126, 125, 124, 125, 125, 126, 126, 125, 126, 126, 126, 125, 125, 125, 124, 125, 124, 124, 124, 124, 124, 124, 124, 125, 125, 126, 127, 128, 128, 128, 129, 130, 130, 130, 130, 131, 131, 130, 129, 129, 129, 128, 128, 127, 125, 124, 123, 123, 122, 122, 122, 122, 122, 122, 121, 120, 120, 120, 120, 120, 120, 120, 121, 121, 122, 122, 124, 126, 127, 129, 131, 134, 137, 141, 145, 147, 147, 144, 140, 135, 131, 128, 125, 124, 124, 123, 123, 123, 124, 124, 125, 125, 127, 128, 128, 128, 128, 128, 127, 126, 125, 124, 123, 122, 121, 121, 120, 119, 117, 117, 116, 116, 115, 115, 114, 114, 114, 113, 112, 112, 112, 111, 111, 110, 110, 107, 109, 108, 107, 107, 107, 107, 107, 106, 106, 106, 105, 104, 103, 103, 102, 101, 100, 100, 99, 99, 98, 98, 98, 97, 97, 97, 97, 97, 97, 97, 96, 95, 94, 94, 93, 93, 94, 95, 95, 96, 96, 96, 96, 95, 93, 91, 88, 86, 83, 82, 80, 79, 77, 75, 74, 72, 71, 70, 68, 67, 65, 64, 62, 61, 59, 57, 55, 54, 52, 50, 48, 46, 44, 43, 41, 39, 37, 34, 32, 30, 28, 25, 23, 21, 19, 17, 15, 13, 11, 10, 8, 7, 6, 5, 4, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0];
G = [29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 56, 58, 60, 62, 64, 67, 69, 72, 75, 78, 80, 83, 85, 85, 85, 85, 86, 87, 88, 89, 90, 90, 91, 92, 93, 94, 95, 97, 98, 100, 101, 103, 104, 105, 106, 107, 107, 108, 109, 109, 110, 111, 112, 114, 115, 117, 119, 120, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 135, 138, 140, 141, 143, 144, 145, 146, 145, 145, 145, 145, 145, 146, 146, 145, 145, 145, 143, 144, 145, 145, 143, 145, 145, 144, 147, 149, 154, 154, 164, 155, 153, 157, 162, 168, 171, 172, 174, 176, 179, 179, 181, 181, 181, 181, 180, 180, 174, 171, 172, 171, 170, 169, 164, 162, 162, 159, 161, 164, 161, 160, 162, 164, 167, 169, 170, 172, 173, 177, 177, 168, 164, 165, 167, 170, 175, 182, 183, 183, 182, 174, 173, 175, 172, 174, 175, 179, 181, 182, 182, 176, 171, 171, 174, 179, 183, 186, 189, 194, 200, 200, 197, 197, 198, 198, 193, 189, 190, 173, 165, 162, 161, 163, 163, 164, 173, 178, 178, 179, 180, 180, 181, 182, 180, 180, 181, 184, 179, 187, 195, 195, 193, 189, 192, 193, 193, 194, 193, 189, 175, 172, 169, 170, 171, 172, 173, 174, 175, 172, 174, 173, 174, 177, 179, 184, 182, 177, 177, 178, 180, 183, 181, 181, 181, 181, 180, 179, 181, 183, 199, 204, 204, 206, 200, 207, 222, 221, 227, 225, 221, 221, 220, 215, 217, 208, 200, 193, 188, 184, 184, 183, 181, 179, 176, 173, 170, 167, 166, 164, 163, 162, 161, 160, 159, 158, 158, 157, 157, 157, 157, 157, 157, 156, 156, 156, 156, 156, 157, 157, 157, 157, 157, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 158, 159, 159, 159, 160, 161, 161, 161, 160, 160, 160, 159, 159, 159, 159, 159, 158, 157, 158, 158, 158, 157, 158, 157, 157, 157, 157, 157, 157, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 155, 156, 156, 156, 156, 156, 156, 155, 155, 155, 155, 154, 155, 154, 154, 154, 153, 153, 152, 153, 153, 153, 152, 152, 151, 151, 151, 151, 150, 151, 151, 150, 150, 150, 150, 150, 150, 151, 150, 149, 149, 149, 149, 150, 150, 149, 149, 148, 148, 148, 148, 148, 148, 148, 148, 147, 147, 147, 147, 147, 147, 147, 147, 146, 146, 146, 146, 146, 145, 145, 145, 145, 145, 145, 145, 145, 144, 144, 144, 144, 144, 144, 143, 143, 143, 143, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 143, 142, 142, 141, 141, 141, 142, 142, 143, 142, 142, 141, 141, 142, 142, 142, 142, 142, 142, 142, 141, 142, 141, 141, 141, 141, 140, 140, 140, 140, 140, 140, 141, 141, 142, 143, 143, 143, 143, 144, 144, 144, 145, 145, 145, 145, 144, 144, 143, 144, 143, 142, 141, 140, 139, 139, 138, 138, 137, 137, 138, 137, 137, 136, 136, 136, 136, 136, 136, 135, 135, 136, 136, 136, 137, 138, 139, 141, 142, 144, 146, 149, 152, 156, 157, 157, 155, 151, 147, 143, 140, 139, 138, 137, 137, 137, 137, 137, 137, 137, 138, 139, 140, 140, 140, 140, 139, 139, 138, 137, 136, 135, 134, 133, 133, 132, 131, 130, 129, 129, 128, 128, 127, 127, 127, 127, 126, 125, 125, 124, 124, 123, 123, 122, 120, 122, 121, 120, 120, 119, 119, 119, 119, 118, 118, 117, 116, 115, 115, 114, 113, 112, 112, 111, 111, 110, 110, 109, 109, 108, 108, 107, 107, 107, 107, 106, 105, 104, 103, 103, 102, 102, 103, 103, 103, 103, 102, 101, 100, 99, 97, 94, 92, 90, 88, 86, 85, 83, 82, 80, 79, 77, 76, 74, 73, 71, 69, 68, 66, 64, 62, 60, 58, 56, 54, 53, 50, 48, 47, 45, 42, 40, 38, 36, 33, 31, 29, 27, 24, 23, 21, 19, 17, 15, 13, 12, 10, 9, 7, 6, 5, 4, 3, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
B = [32, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 64, 66, 68, 70, 73, 75, 78, 80, 82, 85, 86, 87, 87, 88, 89, 90, 91, 91, 92, 93, 94, 95, 95, 97, 98, 99, 101, 102, 104, 105, 106, 108, 108, 109, 109, 110, 111, 112, 112, 113, 114, 116, 117, 119, 120, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 136, 138, 140, 141, 143, 144, 145, 146, 145, 146, 145, 146, 145, 147, 147, 146, 146, 146, 144, 146, 146, 147, 145, 147, 147, 147, 150, 152, 156, 156, 165, 158, 155, 159, 164, 169, 172, 172, 174, 176, 179, 179, 180, 180, 179, 179, 179, 179, 173, 171, 171, 171, 169, 169, 164, 163, 164, 161, 164, 167, 165, 164, 166, 167, 170, 172, 172, 174, 175, 177, 177, 169, 165, 166, 168, 171, 176, 182, 183, 182, 181, 174, 173, 175, 173, 174, 175, 179, 182, 182, 183, 177, 173, 174, 176, 181, 184, 187, 189, 193, 198, 198, 196, 196, 197, 197, 191, 188, 188, 173, 166, 164, 163, 165, 165, 166, 175, 180, 180, 181, 182, 182, 183, 183, 182, 182, 182, 185, 180, 186, 194, 195, 193, 190, 192, 193, 193, 193, 193, 189, 176, 172, 170, 170, 171, 172, 173, 174, 175, 172, 173, 173, 173, 176, 178, 183, 181, 176, 176, 177, 179, 181, 179, 179, 179, 178, 178, 177, 179, 182, 197, 202, 202, 204, 198, 205, 219, 218, 224, 222, 218, 218, 218, 215, 217, 209, 202, 197, 192, 189, 189, 189, 187, 185, 183, 180, 177, 175, 174, 173, 171, 171, 170, 169, 168, 167, 167, 166, 166, 166, 166, 166, 166, 166, 165, 165, 165, 166, 166, 166, 166, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 167, 168, 168, 168, 169, 170, 170, 170, 170, 169, 169, 169, 169, 168, 168, 168, 168, 167, 167, 168, 168, 167, 167, 166, 167, 167, 167, 167, 166, 166, 166, 166, 166, 166, 166, 166, 166, 166, 166, 165, 165, 166, 166, 166, 166, 166, 166, 165, 165, 165, 165, 164, 165, 164, 164, 164, 163, 163, 163, 163, 163, 163, 162, 162, 162, 161, 161, 162, 161, 161, 161, 160, 161, 160, 160, 160, 160, 161, 160, 159, 159, 159, 159, 160, 160, 159, 159, 159, 159, 158, 158, 158, 158, 158, 158, 158, 157, 157, 157, 158, 157, 157, 157, 157, 157, 156, 157, 156, 156, 156, 155, 155, 155, 155, 155, 155, 155, 155, 155, 155, 154, 154, 154, 154, 154, 153, 153, 153, 153, 152, 152, 152, 153, 152, 152, 152, 152, 152, 153, 152, 152, 152, 152, 152, 152, 152, 153, 152, 152, 151, 151, 152, 152, 152, 152, 152, 152, 152, 151, 151, 151, 151, 151, 150, 150, 150, 150, 150, 150, 150, 150, 150, 151, 152, 152, 152, 152, 152, 153, 152, 153, 153, 153, 153, 152, 152, 151, 152, 151, 151, 150, 149, 148, 148, 147, 147, 146, 146, 147, 146, 146, 145, 145, 145, 145, 145, 145, 144, 144, 144, 144, 145, 145, 146, 147, 148, 149, 150, 152, 154, 157, 160, 161, 161, 159, 156, 153, 149, 147, 146, 145, 144, 144, 143, 143, 144, 144, 144, 144, 145, 145, 146, 145, 145, 145, 144, 143, 142, 141, 141, 140, 139, 139, 138, 137, 136, 136, 135, 134, 134, 133, 133, 133, 133, 132, 131, 131, 130, 130, 129, 129, 128, 127, 128, 127, 126, 126, 125, 125, 125, 124, 124, 123, 122, 122, 121, 120, 119, 118, 118, 117, 116, 116, 115, 115, 114, 113, 113, 112, 112, 111, 111, 110, 109, 108, 107, 107, 106, 105, 105, 105, 104, 104, 103, 103, 101, 100, 98, 96, 94, 92, 90, 89, 87, 86, 84, 83, 81, 80, 78, 77, 75, 73, 72, 70, 68, 66, 65, 63, 61, 59, 57, 55, 54, 52, 50, 48, 46, 44, 42, 40, 37, 35, 33, 31, 29, 27, 25, 23, 21, 19, 17, 15, 13, 12, 10, 8, 7, 5, 4, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0];